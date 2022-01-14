import { VFC } from "react";
import { User } from "./types/User";

type Props = {
  user: User;
};

export const UserPropfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
      {/* ?をつけることで要素がない場合undifinedを返す */}
      {/* 今回で言うとhobbiesがない時点でundifinedを返し、joinまで読まないようにしている */}
    </dl>
  );
};
