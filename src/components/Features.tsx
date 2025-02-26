import Image from 'next/image';
import Ecosystem from "@/assets/icons/ecosystem.svg"

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div
      className="py-[72px] w-full
      flex flex-col items-center justify-center
      sm:py-[96px]"
    >
      <h3
        className="w-full 
        text-center text-white text-5xl/[48px] tracking-tighter font-bold
        sm:text-[60px]/[60px]"
      >Everything you need</h3>
      <p
        className="pt-5 w-[343px]
        text-center text-white/70 text-xl/[28px] font-normal
        sm:w-[576px]"
      >
        Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
      </p>

      <div className="
        pt-16 flex flex-col gap-4
        md:flex-row overflow-hidden
      ">
        { 
          features.map((feature, index) => (
            <div key={ index } 
              className='text-white text-center
                w-[343px] h-[264px] 
                flex flex-col items-center justify-center gap-2
                border border-white/40 rounded-xl
                sm:w-[234px] sm:h-[312px]
                lg:w-[330px] lg:h-[264px]
              '
            >
              <div className='w-14 h-14 bg-white/80 rounded-lg 
              m-2
              flex justify-center items-center'>
                <Image src={ Ecosystem } alt="ecosystem-img" height={ 20 } width={ 20 }
                ></Image>
              </div>
              <h5 className='font-bold text-[16px]/[24px]'>{ feature.title }</h5>
              <p className='w-[303px] text-white/70
                sm:h-[128px] sm:w-[194.67px]
              '>{ feature.description }</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};
