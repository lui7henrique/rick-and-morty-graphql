import { useCallback } from "react";
import { FaHeartbeat, FaQuestion, FaSkull } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export type Status = "Alive" | "Dead" | "unknown";

export const useStatus = () => {
  const getStatusIcon = useCallback((status: Status) => {
    const icon: Record<Status, IconType> = {
      Alive: FaHeartbeat,
      Dead: FaSkull,
      unknown: FaQuestion,
    };

    return icon[status] ?? icon["unknown"];
  }, []);

  const getStatusColor = useCallback((status: Status) => {
    const icon: Record<Status, string> = {
      Alive: "#16a34a",
      Dead: "#dc2626",
      unknown: "#d97706",
    };

    return icon[status] ?? icon["unknown"];
  }, []);

  return { getStatusIcon, getStatusColor };
};
