type CounterProps = {
    isColorMode?: boolean;
};

export default function Counter({ isColorMode = false }: CounterProps) {
    return (
        <section style={{ padding: "2rem" }}>
            <h2>Counter Section</h2>
            <p>Color mode: {isColorMode ? "On" : "Off"}</p>
        </section>
    );
}
// File: src/components/Home/Counter/index.tsx