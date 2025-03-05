import { AiFillMessage } from "react-icons/ai";
import { IoCalendar } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import Image from "next/image";
import ShareBtn from "./ShareBtn";
import CmtSec from "./commentSection.jsx/CmtSec";
import LoadingWrapper from "../LoaddingWrapper";

export default function MainInfo() {
  return (
    <div>
      <p className="text-black text-[28px] font-[900] leading-[37px]">
        125 Women migrant workers: Most returned home with dire illnesses
      </p>
      <span className="lg:hidden h-5 w-[57px] flex items-center my-3 justify-center rounded-[56px] text-white font-extrabold text-xs bg-[#6E74FF]">
        World
      </span>
      <div className="flex items-center justify-between lg:mt-6 ">
        <LoadingWrapper link={`/category/tag`}>
          <span className="hidden h-5 w-[57px] lg:flex items-center justify-center rounded-[56px] text-white font-extrabold text-xs bg-[#6E74FF]">
            World
          </span>
        </LoadingWrapper>
        <span className="flex items-center gap-3">
          <IoCalendar size={20} color="#9D9D9D" />
          <span className="text-xs font-extrabold text-black">MAR 3, 2024</span>
        </span>
        <span className="flex items-center gap-3">
          <AiFillMessage size={20} color="#9D9D9D" />
          <span className="text-xs font-extrabold text-black">5 Comments</span>
        </span>
        <span className="flex items-center gap-3">
          <BiSolidLike size={20} color="#9D9D9D" />
          <span className="text-xs font-extrabold text-black">24 Likes</span>
        </span>
      </div>
      <div className="w-full mt-6">
        <Image
          src={"/news/news01.jpg"}
          objectFit="cover"
          width={700}
          height={700}
          alt="news"
          className="rounded-md w-full"
        />
        <div className="text-sm font-[650] text-black text-justify mt-6 lg:mt-8">
          Rahima (not her real name) left Bangladesh for Oman to work as a
          domestic help and support her five-member family after her husband
          passed away. Although she travelled abroad with the hope of securing a
          better future, she returned home within a year -- in bad shape.
          <br />
          Despite being told she would have to work as a domestic help, she was
          assigned various other tasks, including working in a poultry farm and
          carrying heavy water drums up mountainous paths with her bare hands.
          "I wasn't given adequate rest, and after missing work for a day due to
          illness, they didn't allow me to eat." When she asked for food, she
          was met with a torrent of verbal abuse.
          <br /> "When my health deteriorated from the hard labour, my employer
          told me to see a doctor at my own expense, which meant walking five
          kilometres to the hospital." Eventually, Rahima fled and returned to
          Bangladesh, where she learned that she had developed uterine problems.
          She turned to the Wage Earners Welfare Board (WEWB) for assistance,
          which has over the past three years given medical help to 125 women
          migrant workers.
          <br /> Most of them had returned from Saudi Arabia, Jordan, Oman,
          Lebanon, Qatar, the UAE, and other Middle Eastern countries. WEWB's
          records show a concerning trend -- most of these women, like Rahima,
          were suffering from uterine issues In 2023 alone, 56 women applied for
          medical assistance from the organisation and 20 were diagnosed with
          uterine problems. Meanwhile, 19 had endured physical abuse, 10 were
          suffering from kidney issues, and seven were battling cancer.
          <br />
          Fifty-four-year-old Maksuda Khatun, from Mymensingh's Gafargaon,
          returned to Bangladesh from Saudi Arabia on March 16 this year after
          being diagnosed with kidney disease. Upon her arrival, doctors found
          that both of her kidneys were damaged.  She now requires dialysis
          thrice a week, costing her family Tk 35,000 per month. After applying
          to the WEWB, she received Tk 1.50 lakh to cover a portion of her
          medical expenses. "Apart from this money, I had to spend all the money
          I saved while working as a domestic worker abroad and even sold a
          piece of land.
          <br /> "I don't know how I will manage my treatment costs in the
          future," said Maksuda, whose husband, a 57-year-old auto-rickshaw
          driver, struggles to support their family. Experts said female migrant
          workers were almost always overworked without regular meals, and were
          subjected to sexual and physical abuse. Despite visible signs of
          illness, they were rarely, if ever, taken to a doctor. About the
          prevalence of uterine issues among the workers, Farzana Begum Banik,
          head of the Gynecology Department at Gonoshasthaya Medical College,
          said she has encountered several such patients. "As far as I know,
          they often don't have access to regular check-ups abroad and can't see
          a doctor when they're sick. Many choose to remain silent about the
          abuse they endured to preserve their dignity within their families
          upon returning." She added that middle-aged women may naturally
          develop uterine issues, but poor living conditions play a role.
          "Sexually transmitted diseases can also lead to uterine
          complications." Migration expert and rights activist CR Abrar stressed
          the need for a probe and research into why these female workers, who
          left as labourers, were forced to return after being denied medical
          care by their employers. "The health issues of migrant workers have
          persistently been unattended and neglected for years. Employers abroad
          should be responsible for their healthcare but when they [the workers]
          seek it, they are subjected to even termination, which is quite
          distressful." He added that the interim government must ensure this
          through binding contracts, addressing the policy gap and investigating
          these complaints. Speaking to this correspondent, the former Dhaka
          University teacher urged Bangladeshi embassies to play a more active
          role, including staying updated on the conditions of migrant workers
          and maintaining regular contact. "If they could check in with workers
          once a month, many of these issues could be prevented." Shariful
          Islam, deputy director (Welfare) of the WEWB, said they have been
          providing financial support to returnees based on their medical
          conditions. "We have a team of doctors. Based on their examinations,
          we provide the victims with financial assistance ranging from Tk
          50,000 to Tk 1.5 lakh so they can receive treatment."
        </div>
        <div className="w-full h-[1px] bg-brdr mt-8 mb-6"></div>
        <ShareBtn />
      </div>
      <CmtSec />
    </div>
  );
}
