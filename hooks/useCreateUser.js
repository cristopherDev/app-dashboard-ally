import { useState } from "react";

export default function useCreateUser() {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState(false);
  const [userEmail, setUserEmail] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  return [
    loading,
    setLoading,
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    confirmPassword,
    setConfirmPassword,
  ];
}
