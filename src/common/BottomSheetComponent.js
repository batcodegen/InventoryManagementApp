import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import React, {
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
const BottomSheetComponent = forwardRef((props, ref) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['90%'], []);
  useImperativeHandle(ref, () => ({
    focus: () => {
      bottomSheetRef.current.snapToIndex(0);
    },
    close: () => {
      bottomSheetRef.current.close();
    },
  }));
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  const renderBackdrop = useCallback(
    backDropProps => (
      <BottomSheetBackdrop
        {...backDropProps}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        enableTouchThrough={false}
      />
    ),
    [],
  );
  return (
    <BottomSheet
      enablePanDownToClose
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}>
      {props.children}
    </BottomSheet>
  );
});

export default BottomSheetComponent;
