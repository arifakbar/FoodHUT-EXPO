import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Loading from '../components/Loading';

import { getFilterProducts } from '../functions/products';
import Card from '../components/Card';

//filter:{category: "615496563223dc77b6b85911"}
//filter:{subCategory: "615b401924e66b3d0e5c69d1"}

function ProductsScreen(props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id, search } = props.route.params;

    const fetchProducts = async () => {
        try {
            setLoading(true);
            if (search === "category") {
                const res = await getFilterProducts({ category: id });
                setProducts(res.data.data);
                console.log(res.data.data);
            } else {
                const res = await getFilterProducts({ subCategory: id });
                setProducts(res.data.data);
                console.log(res.data.data);
            }
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [id]);

    return <View style={{ alignItems: "center", paddingVertical: 20 }}>
        {loading ? <Loading /> :
            <Card navigation={props.navigation} products={products} />
        }
    </View>
}

export const ProductsScreenOptions = (props) => {
    const { title } = props.route.params;
    return {
        title: title
    }
}

const styles = StyleSheet.create({});

export default ProductsScreen;