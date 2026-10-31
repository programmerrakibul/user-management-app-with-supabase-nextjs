import { signIn } from "@/actions/sign-in";
import { signUp } from "@/actions/sign-up";

export default function LoginPage() {
  return (
    <div className="min-h-dvh w-full grid place-items-center">
      <form className="max-w-125">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={signIn}>Log in</button>
        <button formAction={signUp}>Sign up</button>
      </form>
    </div>
  );
}
