import { $dt } from "@primevue/themes";

export const getPrimaryName = () => {
  const {
    value: {
      light: {
        paths: {
          binding: {
            binding: { name },
          },
        },
      },
    },
  } = $dt("primary.color");
  return name.split(".")[1];
};

export const getSurfaceName = () => {
  const {
    value: {
      light: {
        paths: {
          binding: { name },
        },
      },
    },
  } = $dt("surface.500");
  return name.split(".")[1];
};
