import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useMemo } from "react";

import * as S from "./styles";

type HeaderLinkProps = {
  href: string;
  label: string | ReactNode;
};

export const HeaderLink = (props: HeaderLinkProps) => {
  const { href, label } = props;

  const { asPath } = useRouter();

  const isActive = useMemo(() => {
    return asPath === href;
  }, [asPath, href]);

  console.log({ isActive, asPath, href });

  return (
    <Link href={href}>
      <S.Label isActive={isActive}>{label}</S.Label>
    </Link>
  );
};
