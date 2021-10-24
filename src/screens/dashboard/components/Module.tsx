import React from "react";
import { ImageSourcePropType } from "react-native";
import {
  ArrowRightIcon,
  Module,
  ModuleDescription,
  ModuleImg,
  ModuleSeeMore,
  ModuleTitle,
} from "./styles";

interface ModuleItemProps {
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const ModuleItem: React.FC<ModuleItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Module>
      <ModuleImg source={image} />
      <ModuleTitle>{title}</ModuleTitle>
      <ModuleSeeMore>
        <ModuleDescription>{description}</ModuleDescription>
        <ArrowRightIcon name='arrowright' size='16' />
      </ModuleSeeMore>
    </Module>
  );
};

export default ModuleItem;
