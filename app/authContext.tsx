"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

interface CcontextProps {
  uuid: string;
  setUuid: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  profile: any;
  setProfile: any;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

interface RootLayoutProps {
  children: React.ReactNode;
}

const AuthContext = createContext<CcontextProps>({
  uuid: "",
  setUuid: (): string => "",
  token: "",
  setToken: (): string => "",
  phone: "",
  setPhone: (): string => "",
  profile: {},
  setProfile: () => {},
});

const AuthContextProvider = ({ children }: RootLayoutProps) => {
  const [uuid, setUuid] = useState<string>("");
  const [profile, setProfile] = useState<any>();
  const [token, setToken] = useState("");
  const [phone, setPhone] = useState<string>("");

  const checkAuthStatus = () => {
    try {
      let uuid__ = window.localStorage.getItem("uuid") || "";
      let token__ = window.localStorage.getItem("x_access_token") || "";
      let profile__ = window.localStorage.getItem("profile") || "";
      let phone__ = window.localStorage.getItem("phone") || "";

      if (uuid__ || token__) {
        setUuid(uuid__);
        setToken(token__);
        setPhone(phone__);
        setProfile(JSON.parse(profile__));
      }
    } catch (error) {}
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        uuid,
        setUuid,
        profile,
        setProfile,
        setToken,
        token,
        phone,
        setPhone,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (ctx === undefined) {
    throw new Error("useAuth mus be used with AuthProvide");
  }

  return ctx;
};

export { AuthContextProvider, AuthContext, useAuth };
