import { useConnect } from 'wagmi';
import { DDMItem, DropDownMenu } from '../molecules/DropDownMenu';

export const WalletConnector = () => {
  const [{ data }, connect] = useConnect();

  let ddmItem: DDMItem[] = [];

  data.connectors.forEach((connector) => {
    ddmItem.push({ label: connector.name, action: () => connect(connector) });
  });

  return <DropDownMenu label="Connect Wallet" items={ddmItem}></DropDownMenu>;
};
