import { ImageName } from '.';

export const getImageUrl = (name: ImageName): string => `img/${name}.png`;
export const getImageThumbUrl = (name: ImageName): string => `img/${name}.thumb.png`;
