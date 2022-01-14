import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

export const Text: VFC<Props> = (props) => {
  //関数に対する型は: FC<>で定義する
  //ただFCでは暗黙的にchildrenをpropsで呼ぶので、必要ない場合はVFCで行う
  //FCはver18になったらchildrenがなくなるとされてるのでそれまでの暫定処理でVFC
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
