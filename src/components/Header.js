import { ConnectButton } from "@web3uikit/web3"

function Header() {
    return (
        <div>
            Decentralized Lottery
            <ConnectButton moralisAuth={false}></ConnectButton>
        </div>
    )
}

export default Header
