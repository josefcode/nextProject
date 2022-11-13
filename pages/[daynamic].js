import { useRouter } from "next/router";
import Head from "next/head";
export default function DynamicRoute() {
  const router = useRouter();
  const query = router.query.daynamic;
  console.log(router);

  return (
    <div>
      <Head>
        <title>{query}</title>
      </Head>
      hello i am dainamic route
    </div>
  );
}
