import { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Pressable} from 'react-native';
import Markdown from '@ronradtke/react-native-markdown-display'
import { styles, colors } from './styles';
import { FontAwesome6 } from '@expo/vector-icons';

function BlogLinks({ blogs, getBlog }) {
    const [open, setOpen] = useState(false);

    return (
        <View style={{ flexDirection: 'column', alignItems: 'flex-end'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <Text style={{ ...styles.a, color: colors.brown0}} onPress={() => setOpen(true)}>
            {blogs.length} posts
        </Text>
        <FontAwesome6 name={open ? "chevron-up" : "chevron-down"} size={16} color={colors.brown0} onPress={() => setOpen(!open)} />
        </View>
        { open && (
            <ScrollView style={{ maxHeight: 200, width: '100%', backgroundColor: colors.background, padding: 8}}>
                {blogs.map((blog, index) => (
                    <Pressable onPress={() => getBlog(blog.key)} key={blog.key} style={{ padding: 8, borderBottomWidth: 1, borderBottomColor: colors.brown0 }}>
                    <Text key={blog.key} style={styles.p}> {blog.key.replace("_", " ").replace(".md", "")} - {new Date(blog.last_modified).toLocaleDateString()}
                    </Text>
                    </Pressable>
                ))}
            </ScrollView>
        )}
        </View>
    )
}

export default function Blog() {
    const endpoint = "https://jacobandres-9f4124fa6b37.herokuapp.com/blog"
    const [blogContent, setBlogContent] = useState("")
    const [data, setData] = useState(null);
    const blogQuery = useRef(null)
    const [blogQueue, setBlogQueue] = useState([]);

    async function getBlog(blogKey: string) {
        try {
            const response = await fetch(`${endpoint}?blog=${blogKey}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.text();
            setBlogContent(data);
        } catch (error) {
            console.error("Error fetching blog content:", error);
            setBlogContent("Error fetching blog content.");
        }
    }

    useEffect(() => {
        async function fetchBlog() {
            try {
                const response = await fetch(endpoint + "?list=true");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json()
                data.sort((a, b) => new Date(b.last_modified) - new Date(a.last_modified));
                setBlogQueue(data);
                getBlog(data[0].key); // Load the first blog by default
            } catch (error) {
                console.error("Error fetching blog content:", error);
                setBlogContent("Error fetching blog content.");
            }
        }
        fetchBlog();
    }, []);
  return (
      <SafeAreaView>
      <View style={{ width: '100%', justifyContent: 'justify-end', alignItems: 'flex-end' }}>
      <BlogLinks blogs={blogQueue} getBlog={getBlog}/>
      </View>
      { blogContent && <Markdown
      style={{
          heading1: {...styles.mdH1},
          heading2: {...styles.mdH2},
          body: {...styles.p},
          code_block: { ...styles.codeBlock},
          fence: { ...styles.codeBlock},
          
      }}
      >{blogContent}</Markdown>}
      </SafeAreaView>
  );
}
