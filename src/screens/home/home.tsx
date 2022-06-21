import React from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Buttons, Typography, Sizing } from '../../styles';
import styles from './home.styles';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ margin: Sizing.md }}>
        <View>
          <Text style={Typography.header.h1}>Buttons</Text>
          <Pressable style={Buttons.applyPrimary(styles.button)}>
            <Text style={Typography.textWhite}>Primary Button</Text>
          </Pressable>
          <Pressable style={Buttons.applySecondary(styles.button)}>
            <Text style={Typography.textPrimary}>Secondary Button</Text>
          </Pressable>
        </View>
        <View>
          <Text style={Typography.header.h1}>Inline Buttons</Text>
          <View style={styles.buttonBar}>
            <Pressable style={Buttons.applyPrimary(styles.inlineButton)}>
              <Text style={Typography.textWhite}>Primary Button</Text>
            </Pressable>
            <Pressable style={Buttons.applySecondary(styles.inlineButton)}>
              <Text style={Typography.textPrimary}>Secondary Button</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={Typography.header.h1}>Typography</Text>
          <Text style={Typography.header.h1}>Heading 1</Text>
          <Text style={Typography.header.h2}>Heading 2</Text>
          <Text style={Typography.header.h3}>Heading 3</Text>
          <Text style={Typography.body.default}>Body Text</Text>
          <Text style={Typography.body.bold}>Bold Body Text</Text>
          <Text style={Typography.body.label}>Label Text</Text>
          <Text style={Typography.body.boldLabel}>Bold Label Text</Text>
          <Text style={Typography.body.info}>Info Text</Text>
          <Text style={Typography.body.boldInfo}>Bold Info Text</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
