export const checkValidData = ({
  type,
  name,
  email,
  password,
  newPassword,
  confirmPassword,
}) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
      type === "signup" ? newPassword : password
    );

  if (!isEmailValid) return "Please enter a valid email address.";

  if (type === "login") {
    if (!isPasswordValid) return "Please enter a valid password.";
  }

  if (type === "signup") {
    if (!name || name.trim().length < 2 || !/^[A-Za-z ]+$/.test(name)) {
      return "Please enter a valid name (only letters and spaces, min 2 characters).";
    }

    if (!isPasswordValid) {
      return "Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character.";
    }

    if (newPassword !== confirmPassword) {
      return "Passwords do not match.";
    }
  }

  return null; // all validations passed
};
