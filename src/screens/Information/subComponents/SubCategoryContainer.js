// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { CardHeaderText } from '../../../components/QuestionAnswer/Cards/subcomponents/CardHeaderText';
import { ScrollViewCard } from '../../../components/General Components/ScrollViewCard';
import { MainContentContainer } from '../../../components/MainContentContainer/MainContentContainer';
import { moderateScale } from '../../../styles/Scaling';

type CustomsProceduresInnerProps = {
  children: any,
  title: string,
};

export const SubCategoryContainer = ({
  title,
  children,
}: CustomsProceduresInnerProps) => (
  <MainContentContainer>
    <ScrollViewCard>
      <View style={{ margin: moderateScale(16) }}>
        <CardHeaderText text={title} />
        {children}
      </View>
    </ScrollViewCard>
  </MainContentContainer>
);
