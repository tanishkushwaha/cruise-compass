export type Role = "USER" | "ADMIN" | "SUPERVISOR" | "HEAD_COOK" | "MANAGER";

type Roles = {
  USER: Role;
  ADMIN: Role;
  SUPERVISOR: Role;
  HEAD_COOK: Role;
  MANAGER: Role;
};

export const roles: Roles = {
  USER: "USER",
  ADMIN: "ADMIN",
  SUPERVISOR: "SUPERVISOR",
  HEAD_COOK: "HEAD_COOK",
  MANAGER: "MANAGER",
};
