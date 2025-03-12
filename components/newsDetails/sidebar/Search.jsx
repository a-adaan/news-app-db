"use client";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import {
  Modal,
  Input,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { getSearchResult } from "@/app/actions/common";

export default function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearch = async () => {
    // console.log("query:", query);
    try {
      const res = await getSearchResult(query);
      // console.log("🚀 ~ handleSearch ~ res:", res);
      setResult(res?.message);
      onOpen();
      setQuery("");
    } catch (error) {
      console.log("🚀 ~ handleSearch ~ error:", error);
    }
    // You can add additional logic here, such as sending the query to an API
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="w-full px-2 py-4">
        <Input
          placeholder="Search News"
          type="text"
          variant={"bordered"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          endContent={
            <span
              className="h-full w-[42px] cursor-pointer bg-[#E8E8E8] hover:bg-[#dbdbdb] flex items-center justify-center text-black"
              onClick={handleSearch}
            >
              <CiSearch size={20} />
            </span>
          }
          classNames={{
            inputWrapper: "rounded pr-0",
          }}
        />
      </div>
      <Modal isOpen={isOpen} size={"2xl"} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Search Result
              </ModalHeader>
              <ModalBody>
                <p>{result || "no results found"}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
