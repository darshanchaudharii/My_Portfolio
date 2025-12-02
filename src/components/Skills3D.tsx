import { Canvas } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { Group } from "three";
import { useSpring, animated } from "@react-spring/three";

// Map of skill names to their icon paths
const SKILLS = [
    { name: "React", path: "/images/skills/react.svg" },
    { name: "TypeScript", path: "/images/skills/typescript.svg" },
    { name: "Tailwind", path: "/images/skills/tailwind.svg" },
    { name: "Node", path: "/images/skills/node.svg" },
    { name: "Next", path: "/images/skills/next.svg" },
    { name: "Three", path: "/images/skills/three.svg" },
    { name: "Java", path: "/images/skills/icons8-java.svg" },
    { name: "Spring Boot", path: "/images/skills/icons8-spring-boot.svg" },
    { name: "MySQL", path: "/images/skills/icons8-mysql.svg" },
    { name: "Git", path: "/images/skills/icons8-git.svg" },
    { name: "Angular", path: "/images/skills/icons8-angular.svg" },
    { name: "PostgreSQL", path: "/images/skills/icons8-postgresql.svg" },
];

const SkillIcon = ({
    position,
    texturePath,
}: {
    position: [number, number, number];
    texturePath: string;
}) => {
    const meshRef = useRef<Group>(null);
    const [hovered, setHovered] = useState(false);
    const texture = useTexture(texturePath);

    const { scale } = useSpring({
        scale: hovered ? 1.2 : 1,
        config: { mass: 1, tension: 280, friction: 60 },
    });

    return (
        <Float
            speed={2} // Animation speed
            rotationIntensity={0.5} // XYZ rotation intensity
            floatIntensity={1} // Up/down float intensity
        >
            <animated.group
                ref={meshRef}
                position={position}
                scale={scale}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <mesh>
                    <planeGeometry args={[1.5, 1.5]} />
                    <meshStandardMaterial
                        map={texture}
                        transparent
                        alphaTest={0.5}
                        roughness={0.5}
                    />
                </mesh>
            </animated.group>
        </Float>
    );
};

const SkillsScene = () => {
    // Grid layout logic
    const getPosition = (index: number): [number, number, number] => {
        const cols = 4; // Increased columns for more skills
        const row = Math.floor(index / cols);
        const col = index % cols;
        // Center the grid
        const x = (col - 1.5) * 2.5;
        const y = -(row - 1) * 2.5;
        return [x, y, 0];
    };

    return (
        <group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            {SKILLS.map((skill, index) => (
                <SkillIcon
                    key={skill.name}
                    position={getPosition(index)}
                    texturePath={skill.path}
                />
            ))}
        </group>
    );
};

const Skills3D = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile) {
        // Fallback for mobile to save battery/perf
        return (
            <div className="grid grid-cols-3 gap-8 p-4">
                {SKILLS.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2">
                        <img
                            src={skill.path}
                            alt={skill.name}
                            className="h-16 w-16 transition-transform hover:scale-110"
                        />
                        <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="h-[600px] w-full">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 50 }}>
                <Suspense fallback={null}>
                    <SkillsScene />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Skills3D;
