import router, { NextRouter } from "next/router";

type ImageList = {
  [key: number]: {
    [key: number]: string | string[] | undefined;
  };
};

export const ImageList = (props: {
  image: string;
  router: NextRouter;
}): ImageList => {
  const { image, router } = props;
  return {
    1: { 0: image },
    2: { 0: router.query[0], 1: image },
    3: { 0: router.query[0], 1: router.query[1], 2: image },
    4: {
      0: router.query[0],
      1: router.query[1],
      2: router.query[2],
      3: image,
    },
    5: {
      0: router.query[0],
      1: router.query[1],
      2: router.query[2],
      3: router.query[3],
      4: image,
    },
    6: {
      0: router.query[0],
      1: router.query[1],
      2: router.query[2],
      3: router.query[3],
      4: router.query[4],
      5: image,
    },
    // 7: {
    //   0: router.query[0],
    //   1: router.query[1],
    //   2: router.query[2],
    //   3: router.query[3],
    //   4: router.query[4],
    //   5: router.query[5],
    //   6: image,
    // },
    // 8: {
    //   0: router.query[0],
    //   1: router.query[1],
    //   2: router.query[2],
    //   3: router.query[3],
    //   4: router.query[4],
    //   5: router.query[5],
    //   6: router.query[6],
    //   7: image,
    // },
    // 9: {
    //   0: router.query[0],
    //   1: router.query[1],
    //   2: router.query[2],
    //   3: router.query[3],
    //   4: router.query[4],
    //   5: router.query[5],
    //   6: router.query[6],
    //   7: router.query[7],
    //   8: image,
    // },
    // 10: {
    //   0: router.query[0],
    //   1: router.query[1],
    //   2: router.query[2],
    //   3: router.query[3],
    //   4: router.query[4],
    //   5: router.query[5],
    //   6: router.query[6],
    //   7: router.query[7],
    //   8: router.query[8],
    //   9: image,
    // },
    // 11: {
    //   0: router.query[0],
    //   1: router.query[1],
    //   2: router.query[2],
    //   3: router.query[3],
    //   4: router.query[4],
    //   5: router.query[5],
    //   6: router.query[6],
    //   7: router.query[7],
    //   8: router.query[8],
    //   9: router.query[9],
    //   10: image,
    // },
    // 12: {
    //   0: router.query[0],
    //   1: router.query[1],
    //   2: router.query[2],
    //   3: router.query[3],
    //   4: router.query[4],
    //   5: router.query[5],
    //   6: router.query[6],
    //   7: router.query[7],
    //   8: router.query[8],
    //   9: router.query[9],
    //   10: router.query[10],
    //   11: image,
    // },
  };
};
