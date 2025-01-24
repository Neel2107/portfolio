import React, { useCallback, useEffect, useRef } from 'react';

const BlobEffect = React.memo(() => {
  const blobRef = useRef(null);

  const handlePointerMove = useCallback((event:any) => {
    const { clientX, clientY } = event;
    if (blobRef.current) {
      const blob = blobRef.current as HTMLDivElement;
      blob.style.left = `${clientX}px`;
      blob.style.top = `${clientY + window.pageYOffset}px`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [handlePointerMove]);

  return <div id="blob" className='hidden lg:block' ref={blobRef} />;
});

BlobEffect.displayName = 'BlobEffect';
export default BlobEffect;