import { useCallback, useMemo, useState } from "react";

/**
 * useSummary encapsulates the logic to compute the data for the summary view
 * @returns
 */
const useSummary = () => {
  const [imagesCount, setImagesCount] = useState(0);
  const [longestRowLabel, setLongestRowLabel] = useState(4);
  const [longestColumnLabel, setLongestColumnLabel] = useState(4);
  const [shortestRowLabel, setShortestRowLabel] = useState(4);
  const [shortestColumnLabel, setShortestColumnLabel] = useState(4);

  const setRowLabelLength = useCallback(
    (val: string) => {
      if (val.length > longestRowLabel) {
        setLongestRowLabel(val.length);
      }
      if (val.length < shortestRowLabel) {
        setShortestRowLabel(val.length);
      }
    },
    [longestRowLabel, shortestRowLabel]
  );

  const setColLabelLength = useCallback(
    (val: string) => {
      if (val.length > longestColumnLabel) {
        setLongestColumnLabel(val.length);
      }
      if (val.length < shortestColumnLabel) {
        setShortestColumnLabel(val.length);
      }
    },
    [longestColumnLabel, shortestColumnLabel]
  );

  const appendImages = useCallback(() => {
    setImagesCount(imagesCount + 1);
  }, [imagesCount]);

  return useMemo(
    () => ({
      values: {
        imagesCount,
        longestRowLabel,
        longestColumnLabel,
        shortestRowLabel,
        shortestColumnLabel,
      },
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
      shortestColumnLabel,
      shortestRowLabel,
    ]
  );
};

export { useSummary };
