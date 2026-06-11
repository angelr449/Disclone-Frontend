
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation } from "@tanstack/react-query"
import { postSignup } from "../../actions/post-signup"
import { useNavigate } from "react-router"


interface Props {
  isLogin: boolean,
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>,
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const Signup = ({ isLogin, setIsLogin }: Props) => {
  const navigate = useNavigate();

  const handlePage = () => {
    setIsLogin(!isLogin)
  }
  const mutation = useMutation({
    mutationFn: ({
      name,
      email,
      password,
      repeatPassword,
    }: SignupData) => postSignup({name, email, password, repeatPassword}),
  });

  const handleSubmit =  (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();


    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const repeatPassword = formData.get("repeat-password") as string;


    mutation.mutate(
      {
        name,
        email,
        password,
        repeatPassword,
      },
      {
        onSuccess: (data) => {
          console.log("SUCCESS");
          document.cookie = `token=${data.data.token}; max-age=604800; path=/`
          navigate("/")
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
            Create an account
          </CardTitle>

          <CardDescription className="text-[#b5bac1]">
            Join the conversation and start chatting.
          </CardDescription>

        </CardHeader>

        <CardContent>

          <div className="flex flex-col gap-5">

            {/* Name */}
            <div className="grid gap-2">

              <Label
                htmlFor="name"
                className="text-xs font-bold uppercase text-[#b5bac1] mt-3"
              >
                Name
              </Label>

              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
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

            {/* Email */}
            <div className="grid gap-2">

              <Label
                htmlFor="email"
                className="text-xs font-bold uppercase text-[#b5bac1]"
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

              <Label
                htmlFor="password"
                className="text-xs font-bold uppercase text-[#b5bac1]"
              >
                Password
              </Label>

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
                "
              />

            </div>

            {/* Repeat Password */}
            <div className="grid gap-2">

              <Label
                htmlFor="repeat-password"
                className="text-xs font-bold uppercase text-[#b5bac1]"
              >
                Repeat Password
              </Label>

              <Input
                id="repeat-password"
                name="repeat-password"
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

        <CardFooter className="flex flex-col gap-4 bg-[#2b2d31]">

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
            {mutation.isPending ? "Creating account..." : "Sign Up"}
          </Button>

          <div className="text-sm text-[#949ba4]">

            Already have an account?{" "}

            <Button
              type="button"
              variant="link"
              onClick={handlePage}
              className="
                p-0
                h-auto
                text-[#00a8fc]
                hover:no-underline
              "
            >
              Login
            </Button>

          </div>

        </CardFooter>

      </form>

    </Card>

  </div>
)
}