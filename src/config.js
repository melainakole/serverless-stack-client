const config = {
  STRIPE_KEY:
    "pk_test_51I5C5uGHpnWf8FrDt5WanX5NbGKUpEzojj5VN0lVEqnmHIndmplGFCrxBB9jAV3RgNx6OEp5tX38r6TfSZI3oSc400QrVEsmkj",
  MAX_ATTACHMENT_SIZE: 5 * 1000 * 1000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-menita",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://pfwzphxjc4.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_q8qeGluI1",
    APP_CLIENT_ID: "5d5oiqrg1gj8sfmleibflfhv6",
    IDENTITY_POOL_ID: "us-east-1:d004a9a7-ab41-4828-8152-6a090b64e81e",
  },
};

export default config;
