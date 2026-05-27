import { postSignup } from "@/app/actions/post-signup"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation } from "@tanstack/react-query"


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
          console.log("SUCCESS", data);
        },

        onError: (error) => {
          console.log("ERROR", error);
        },
      }
    );

  };

  return (
    <div className="flex items-center justify-center min-h-screen">

      <Card className="w-full max-w-sm">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
              Enter your details below to create your account
            </CardDescription>
          </CardHeader>

          <CardContent>

            <div className="flex flex-col gap-6">

              {/* Name */}
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Repeat Password</Label>
                <Input id="repeat-password" name="repeat-password" type="repeat-password" required />
              </div>

            </div>

          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Sign up
            </Button>

            {/* <Button variant="outline" className="w-full">
            Sign up with Google
          </Button> */}

            <CardAction>
              <Button type="button" variant="link" onClick={handlePage}>
                Already have an account? Login
              </Button>
            </CardAction>
          </CardFooter>
        </form>
      </Card>

    </div>
  )
}