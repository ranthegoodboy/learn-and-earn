import { useAuthStore } from "@/stores/auth-store";

const useCurrentUser = () => {
  const currentUser = useAuthStore((state) => state.user);
  return currentUser;
};

export default useCurrentUser;
