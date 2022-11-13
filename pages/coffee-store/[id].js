import { useRouter } from "next/router";
import Link from "next/link";

export default function CoffeeStore() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      Coffe Store
      <Link href="/">Back to home</Link>
    </div>
  );
}
