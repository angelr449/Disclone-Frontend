import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
  isLogin: boolean,
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>,
}

export const Signup = ({ isLogin, setIsLogin }: Props) => {

  const handlePage = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="flex items-center justify-center min-h-screen">

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">

              {/* Name */}
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
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
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>

            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Sign up
          </Button>

          {/* <Button variant="outline" className="w-full">
            Sign up with Google
          </Button> */}

          <CardAction>
            <Button variant="link" onClick={handlePage}>
              Already have an account? Login
            </Button>
          </CardAction>
        </CardFooter>
      </Card>

    </div>
  )
}