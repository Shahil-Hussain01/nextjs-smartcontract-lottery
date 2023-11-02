import { useMoralis } from "react-moralis"
import { useEffect } from "react"

function ManualHeader() {
    const { enableWeb3, account, isWeb3Enabled, Moralis } = useMoralis()

    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
    }, [isWeb3Enabled, enableWeb3])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {})
    })

    return (
        <div>
            {account ? (
                <div>
                    Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3()
                        if (typeof window !== "undefined") {
                            window.localStorage.setItem("connected", "injected")
                        }
                    }}
                >
                    connect
                </button>
            )}
        </div>
    )
}

export default ManualHeader
