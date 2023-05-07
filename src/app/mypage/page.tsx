"use client";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure({
  "aws_project_region": process.env.PROJECT_REGION,
  "aws_cognito_identity_pool_id": process.env.COGNITO_IDENTITY_POOL_ID,
  "aws_cognito_region": process.env.COGNITO_REGION,
  "aws_user_pools_id": process.env.USER_POOLS_ID,
  "aws_user_pools_web_client_id": process.env.USER_POOLS_WEB_CLIENT_ID,
  "oauth": {},
  "aws_cognito_username_attributes": [
      "EMAIL"
  ],
  "aws_cognito_social_providers": [],
  "aws_cognito_signup_attributes": [
      "EMAIL"
  ],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [
      "SMS"
  ],
  "aws_cognito_password_protection_settings": {
      "passwordPolicyMinLength": 8,
      "passwordPolicyCharacters": []
  },
  "aws_cognito_verification_mechanisms": [
      "EMAIL"
  ]
});

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
