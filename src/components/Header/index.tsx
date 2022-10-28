import { useMemo } from "react";
import Link from "next/link";

import * as S from "./styles";

import { SiGraphql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import { useTheme } from "styled-components";

import { HeaderLink } from "../HeaderLink";

export const Header = () => {
  const { colors } = useTheme();

  const nav = useMemo(
    () => [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Characters",
        href: "/characters",
      },
      {
        label: "Seasons",
        href: "/seasons",
      },
      {
        label: "Docs",
        href: "/docs",
      },
    ],
    []
  );

  return (
    <S.Header>
      <S.Container>
        <S.Logo>
          <SiGraphql size={32} color={colors.pink["400"]} />

          <S.Content>
            <S.Title>Rick and Morty</S.Title>
            <S.Subtitle>Typescript, GraphQL & Apollo</S.Subtitle>
          </S.Content>
        </S.Logo>

        <S.Nav>
          {nav.map((link) => {
            return <HeaderLink key={link.href} {...link} />;
          })}

          <Link
            href="https://github.com/lui7henrique/rick-and-morty-graphql"
            target="_blank"
          >
            <FaGithub size={24} />
          </Link>
        </S.Nav>
      </S.Container>
    </S.Header>
  );
};
