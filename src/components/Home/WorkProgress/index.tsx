type WorkProgressProps = {
    isColorMode?: boolean;
};

export default function WorkProgress({ isColorMode = false }: WorkProgressProps) {
    return (
        <section style={{ padding: "2rem" }}>
            <h2>Work Progress</h2>
            <p>Color mode: {isColorMode ? "On" : "Off"}</p>
        </section>
    );
}
// File: src/components/Home/WorkProgress/index.tsx