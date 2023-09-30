import { Waveform } from "@uiball/loaders"

const LoaderComponent = () => {
    return (
        <div
        style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent:"center",
            }}
        >
            <Waveform size={40} lineWeight={3.5} speed={1} color="black" />
        </div>
    )
}

export default LoaderComponent