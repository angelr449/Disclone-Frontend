import { useMutation } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import {
  Card,
  
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { postLogin } from "@/app/actions/post-login"
// import { verifyJWT } from "@/helpers/verifyJWT"

interface Props {
  isLogin: boolean,
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>,
}




export const Login = ({ isLogin, setIsLogin }: Props) => {

  const handlePage = () => {

    setIsLogin(!isLogin);

  }

  const mutation = useMutation({
    mutationFn: ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => postLogin(email, password),
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;


    mutation.mutate(
      {
        email,
        password
      },
      {
        onSuccess: (data) => {
          console.log("SUCCESS");
          localStorage.setItem("token", data.data.token)
          
          // const user = verifyJWT(data.data.token);
          
        },

        onError: (error) => {
          console.log("ERROR", error);
        },
      }
    );

  };


 return (
  <div className="flex items-center justify-center min-h-screen bg-[#313338]">

    <Card className="w-full max-w-md bg-[#2b2d31] border-[#1e1f22] text-white shadow-2xl">

      <form onSubmit={handleSubmit}>

        <CardHeader className="space-y-2 text-center">

          <CardTitle className="text-2xl font-bold">
            Welcome back!
          </CardTitle>

          <CardDescription className="text-[#b5bac1]">
            We're so excited to see you again!
          </CardDescription>

        </CardHeader>

        <CardContent>

          <div className="flex flex-col gap-5">

            {/* Email */}
            <div className="grid gap-2">

              <Label
                htmlFor="email"
                className="text-xs font-bold uppercase text-[#b5bac1] mt-3"
              >
                Email
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                className="
                  bg-[#1e1f22]
                  border-[#1e1f22]
                  text-white
                  placeholder:text-[#6d6f78]
                  focus-visible:ring-[#5865f2]
                  
                "
              />

            </div>

            {/* Password */}
            <div className="grid gap-2">

              <div className="flex items-center justify-between">

                <Label
                  htmlFor="password"
                  className="text-xs font-bold uppercase text-[#b5bac1]"
                >
                  Password
                </Label>

                <a
                  href="#"
                  className="
                    text-xs
                    text-[#00a8fc]
                    hover:underline
                  "
                >
                  Forgot your password?
                </a>

              </div>

              <Input
                id="password"
                name="password"
                type="password"
                required
                className="
                  bg-[#1e1f22]
                  border-[#1e1f22]
                  text-white
                  placeholder:text-[#6d6f78]
                  focus-visible:ring-[#5865f2]
                  mb-4
                "
              />

            </div>

          </div>

        </CardContent>

        <CardFooter className="flex flex-col gap-4 bg-[#2b2d31]" >

          <Button
            type="submit"
            disabled={mutation.isPending}
            className="
              w-full
              bg-[#5865f2]
              hover:bg-[#4752c4]
              text-white
              font-medium
            "
          >
            {mutation.isPending ? "Logging in..." : "Login"}
          </Button>

          <div className="text-sm text-[#949ba4]">

            Don't have an account?{" "}

            <Button
              variant="link"
              type="button"
              onClick={handlePage}
              className="
                p-0
                h-auto
                text-[#00a8fc]
                hover:no-underline
              "
            >
              Sign up
            </Button>

          </div>

        </CardFooter>

      </form>

    </Card>

  </div>
)
}
