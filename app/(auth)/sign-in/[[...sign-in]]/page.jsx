import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return(
    <div className="flex justify-center pt-30">
      <SignIn />
    </div>
  );
  
  
};

export default Page;
