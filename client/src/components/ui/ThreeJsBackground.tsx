import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    // Create a group to hold objects
    const group = new THREE.Group();
    scene.add(group);
    
    // Create geometry
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    
    // Create material
    const material = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    
    // Create mesh
    const torusKnot = new THREE.Mesh(geometry, material);
    group.add(torusKnot);
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the torus knot
      torusKnot.rotation.x += 0.005;
      torusKnot.rotation.y += 0.005;
      
      renderer.render(scene, camera);
    };
    
    // Handle window resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.remove(group);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="three-canvas" id="three-container" />;
};

export default ThreeJsBackground;
