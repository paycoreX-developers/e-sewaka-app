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
  profile: {},
  setProfile: () => {},
});

const AuthContextProvider = ({ children }: RootLayoutProps) => {
  const [uuid, setUuid] = useState<string>("");
  const [profile, setProfile] = useState<any>();
  const [token, setToken] = useState("");

  const checkAuthStatus = () => {
    try {
      let uuid__ = window.localStorage.getItem("uuid") || "";
      let token__ = window.localStorage.getItem("x_access_token") || "";

      if (uuid__ || token__) {
        setUuid(uuid__);
        setToken(token__);
      } else {
      }
    } catch (error) {
      console.error("Error Context");
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{ uuid, setUuid, profile, setProfile, setToken, token }}
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
