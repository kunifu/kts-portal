"use client";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";

import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator signUpAttributes={["nickname"]}>
      <MyPage />
    </Authenticator>
  );
}

function MyPage() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <main>
      <h1>{user?.attributes?.nickname}さん KTS Portalへようこそ</h1>
      <h2>{user?.attributes?.email} でログインしています。</h2>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
