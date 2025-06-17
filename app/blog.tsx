import { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import Markdown from '@ronradtke/react-native-markdown-display'
import { styles } from './styles';

export default function Blog() {
    const blogContent = `# Blog`
    const blogQuery = useRef(null)
    console.log("blogQuery", blogContent)

  return (
      <SafeAreaView>
      <Markdown
      style={{
          heading1: {...styles.h1},
      }}
      >{blogContent}</Markdown>
      </SafeAreaView>
  );
}
