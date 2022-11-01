import { useMemo, useCallback } from "react";
import Image from "next/image";

import { Status, useStatus } from "hooks/useStatus";

import * as S from "./styles";

export type Character = {
  id?: string | null;
  name?: string | null;
  status?: Status | null;
  image?: string | null;
  type?: string | null;
  location?: {
    __typename?: "Location";
    name?: string | null;
    dimension?: string | null;
  };
  origin?: {
    __typename?: "Location";
    name?: string | null;
    dimension?: string | null;
  };
};

type CharacterCardProps = Character;

export const CharacterCard = (props: CharacterCardProps) => {
  const { name, image, type, status } = props;

  const { getStatusIcon, getStatusColor } = useStatus();

  const avatar = useMemo(() => {
    const fallback = `https://ui-avatars.com/api/?color=fff&background=0a0a0a&name=${name}&size=512`;

    return image ? image : fallback;
  }, [image, name]);

  const alt = useMemo(() => name ?? "fallback img", [name]);

  const [StatusIcon, statusColor] = [
    getStatusIcon(status ?? "unknown"),
    getStatusColor(status ?? "unknown"),
  ];

  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={avatar} fill alt={alt} />

        <S.Status>
          <StatusIcon color={statusColor} size={16} />
          <S.StatusLabel>{status}</S.StatusLabel>
        </S.Status>
      </S.ImageContainer>

      <S.Content>
        <S.Infos>
          <S.Name>{name}</S.Name>
        </S.Infos>

        <S.Type>{type}</S.Type>
      </S.Content>
    </S.Container>
  );
};
