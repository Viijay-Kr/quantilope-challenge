import { useCallback, useMemo, useState } from "react";

/**
 * useSummary encapsulates the logic to compute the data for the summary view
 * @returns
 */
const useSummary = () => {
  const [imagesCount, setImagesCount] = useState(0);
  const [longestRowLabel, setLongestRowLabel] = useState(0);
  const [longestColumnLabel, setLongestColumnLabel] = useState(0);

  const setRowLabelLength = useCallback(
    (val: string) => {
      if (val.length > longestRowLabel) {
        setLongestRowLabel(val.length);
      }
    },
    [longestRowLabel]
  );

  const setColLabelLength = useCallback(
    (val: string) => {
      if (val.length > longestColumnLabel) {
        setLongestColumnLabel(val.length);
      }
    },
    [longestColumnLabel]
  );

  const appendImages = useCallback(() => {
    setImagesCount(imagesCount + 1);
  }, [imagesCount]);

  return useMemo(
    () => ({
      values: { imagesCount, longestRowLabel, longestColumnLabel },
      updaters: {
        setImagesCount: appendImages,
        setLongestRowLabel: setRowLabelLength,
        setLongestColumnLabel: setColLabelLength,
      },
    }),
    [
      appendImages,
      imagesCount,
      longestColumnLabel,
      longestRowLabel,
      setColLabelLength,
      setRowLabelLength,
    ]
  );
};

export { useSummary };
