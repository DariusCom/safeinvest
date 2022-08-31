import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/testComplete1.gltf");

  const onClick = (e) => {
    props.changeReviewRegion(e.object.material.name);
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Clouds.geometry}
        material={materials.Clouds}
        position={[0, 0, 0.2]}
        scale={0.0353}
      />
      <mesh
        geometry={nodes.Continents.geometry}
        material={materials["Mat.3"]}
        position={[0.62, 5.3, 3.5]}
        scale={0.0353}
      />
      <mesh
        geometry={nodes.South_Pole.geometry}
        material={materials.material_3}
        position={[0, -16.7, 0.2]}
        scale={0.032}
      />
      <mesh
        geometry={nodes.Oceans.geometry}
        material={materials.material}
        position={[0, 0, 0.2]}
        scale={0.034}
      />
      <mesh
        geometry={nodes.North_Pole.geometry}
        material={materials.material_3}
        position={[0, 16.52, 0.2]}
        scale={0.0353}
      />
      <group position={[-1.33, 0.83, 17.66]} rotation={[-0.84, 1.47, 2.35]}>
        <mesh
          onClick={(e) => onClick(e)}
          geometry={nodes.Circle.geometry}
          material={materials.africa}
        />
        <mesh
          geometry={nodes.Circle_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group position={[2.78, 8.42, 15.17]} rotation={[-2.7, 1.35, -2.54]}>
        <mesh
          onClick={(e) => onClick(e)}
          geometry={nodes.Circle007.geometry}
          material={materials.europe}
        />
        <mesh
          geometry={nodes.Circle007_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group position={[-13.8, 6.14, -8.93]} rotation={[-2.9, 0.61, -1.39]}>
        <mesh
          onClick={(e) => onClick(e)}
          geometry={nodes.Circle008.geometry}
          material={materials.us1}
        />
        <mesh
          geometry={nodes.Circle008_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group position={[-14.94, 9.09, -0.26]} rotation={[-3.01, 0.09, -1]}>
        <mesh
          onClick={(e) => onClick(e)}
          geometry={nodes.Circle009.geometry}
          material={materials.us2}
        />
        <mesh
          geometry={nodes.Circle009_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group position={[-15.53, -6.79, 6.45]} rotation={[3.08, -0.4, -1.99]}>
        <mesh
          onClick={(e) => onClick(e)}
          geometry={nodes.Circle010.geometry}
          material={materials.brazil}
        />
        <mesh
          geometry={nodes.Circle010_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group position={[14.15, 3.57, 9.88]} rotation={[-3.03, 0.64, -1.83]}>
        <mesh
          onClick={(e) => onClick(e)}
          geometry={nodes.Circle011.geometry}
          material={materials.india}
        />
        <mesh
          geometry={nodes.Circle011_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group position={[14.34, -9.42, -5.16]} rotation={[-3.11, -0.34, -1.01]}>
        <mesh
          onClick={(e) => onClick(e)}
          geometry={nodes.Circle012.geometry}
          material={materials.australia}
        />
        <mesh
          geometry={nodes.Circle012_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/testComplete1.gltf");
