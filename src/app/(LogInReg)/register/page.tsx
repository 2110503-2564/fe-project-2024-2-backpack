import RegisterPanel from "@/components/RegisterPanel";
export default function Register() {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-cover bg-no-repeat bg-center flex justify-center items-center"
      style={{
        backgroundImage: `
            url('/img/logInRegPage.png'), 
            radial-gradient(54.4% 54.4% at 50% 45.6%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0) 100%), 
            radial-gradient(75.85% 79.48% at 50% 50%, 
            rgba(255, 255, 255, 0) 13%, 
            rgba(255, 255, 255, 0) 36%, 
            rgba(255, 0, 0, 0.52) 51.5%, 
            rgba(255, 111, 0, 0.52) 60.5%, 
            rgba(255, 251, 0, 0.52) 68.5%, 
            rgba(9, 255, 0, 0.52) 79.5%, 
            rgba(0, 212, 255, 0.52) 85.5%, 
            rgba(0, 85, 255, 0.52) 95%, 
            rgba(149, 0, 255, 0.52) 100%)`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    <RegisterPanel/>
    </div>
  );
}
