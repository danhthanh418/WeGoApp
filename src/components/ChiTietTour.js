import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Button, StyleSheet,Image} from 'react-native';
import {Icon, Card} from 'react-native-elements';
export default class ChiTietTour extends Component {
  render () {
    return <View style={{flex: 1}}>
        <Text style={styles.tourTitle}>
          Tour Tết Thái Lan 5N4D: Bangkok - Pattaya - TigerZoo
        </Text>
      <Card image={{ uri: 'https://cdn2.ivivu.com/2017/08/23/11/coral-island-750x390.jpg' }}></Card>
        <View style={{flex: 1, justifyContent: 'flex-start', flexDirection: 'row'}}>
          <View style={{flexDirection: 'row'}}>
            <Icon type="font-awesome" name="map-marker" color="grey" />
            <Text>Hồ Chí Minh</Text>
          </View>
          <View style={{flexDirection: "row",paddingLeft:5}}>
            <Icon type="font-awesome" name="clock-o" color="grey" />
            <Text>4 ngày 5 đêm</Text>
          </View>
          <View style={{flexDirection: "row",paddingLeft:5}}>
            <Icon type="font-awesome" name="paper-plane" color="grey" />
            <Text>Phương tiện</Text>
            <Icon type="font-awesome" name="plane" color="grey" />
            <Icon type="font-awesome" name="bus" color="grey" />
          </View>
          <View style={{flexDirection: "row",paddingLeft:5}}>
            <Text>Mã tour:</Text>
            <Text>TO01</Text>
          </View>
          <View style={{flexDirection: 'row' ,paddingLeft:5}}>
            <Icon type="font-awesome" name="file-o" color="grey" />
            <Text>
              KH: Từ 25 Tết (30/01) đến Mùng 5 tết (09/02). Vui lòng liên hệ
              để check chỗ và Hồ Chí Minh 5 Ngày 4 Đêm Phương tiện: KH: Từ
              25 Tết (30/01) đến Mùng 5 tết (09/02). Vui lòng liên hệ để
              check chỗ và chương trình{' '}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.titleHeader}>LỊCH TRÌNH TOUR</Text>
          <Text style={styles.title}>ĐIỂM NỔI BẬT</Text>
          <Text>- Tham quan "Công Viên Tiger Zoo"</Text>
          <Text>- Thưởng thức "Alcazar Show"</Text>
          <Text>- "Chùa Wat Saket" – Chùa Núi Vàng</Text>
          <Text>- Tham quan "Công Viên Tiger Zoo"</Text>
          <Text>- Tham quan "Công Viên Tiger Zoo"</Text>
        </View>
        <View>
        <Text style={styles.title}>NGÀY 1:  TP.HCM - BANGKOK (BỮA ĂN TÙY THEO GIỜ BAY)</Text>
        <Text>Trưởng đoàn đón khách tại sân bay Tân Sơn Nhất để làm thủ tục checkin đáp chuyến bay đi Thái Lan (Bangkok).Đến vương quốc Thái Lan xe và HDV đón đoàn đưa khách về khách sạn nhận phòng và nghỉ ngơi.</Text>
        <Text style={styles.title}>NGÀY 2: BANGKOK - PATTAYA  (ĂN SÁNG,TRƯA,TỐI)</Text>
        <Text>Đoàn dùng điểm tâm sáng tại khách sạn. Làm thủ tục trả phòng.Đoàn khởi hành tham quan :"Chùa Wat Saket"– Chùa Núi Vàng, là một ngon đồi thấp với một bảo tháp bằng vàng lấp lánh. Bên trong, tòa tháp 58m có chứa xá lợi Phật. Khu vực xung quanh chùa nổi bật với nhiều cây xanh trưởng thành cùng nhà nguyện, chánh điện và thư viện. Chùa có nguồn gốc từ thời Ayutthaya (1350 – 1767) với nhiều lần đại tu dưới vương triều Vua Rama I (1782 – 1809).</Text>
      <Card image={{ uri: 'https://cdn2.ivivu.com/2017/09/18/14/ivivu-chua-wat-saket.jpg' }}></Card>
        <Text>- “Công viên Tiger Zoo ” - là nơi duy nhất trên thế giới thuần dưỡng chúa sơn lâm trở nên thân thiện với con người. Quý khách có dịp xem show biểu diễn xiếc của những chú cọp, Xiếc cá sấu, đặc biệt vui nhộn với cuộc thi heo học toán, heo chạy đua.Đoàn dùng bữa trưa trong công viên.Khởi hành đi Pattaya, thành phố du lịch biển nổi tiếng phương Đông.Trên đường dừng tham quan:“Butterfly Garden” – Vườn Bướm, đoàn tìm hiểu qui trình khai thác Yến Thái, thưởng thức chè Yến, trà mật ong Tam Giác Vàng.Đoàn có thể mua sắm các sản phẩm tại đây như: Mật ong Tam Giác Vàng, Yến Sào, Cao Hổ."Baan Sukhawadee"- Ngôi Nhà Hạnh Phúc  tòa lâu đài xây dựng tráng lệ nguy nga bên bờ biển, mô phỏng theo cung điện Versailles, điểm tham quan mới và hấp dẫn tại Pattaya. Đến đây, Quý khách tham quan một quần thể kiến trúc hài hòa, độc đáo, và còn có thể trải nghiệm những triết lý nhân sinh và tâm linh sâu sắc.</Text>
          <Text>- Tham quan "Công Viên Tiger Zoo"</Text>
        </View>
      </View>;
  }
}
const styles = StyleSheet.create ({
  tourTitle: {
    fontWeight: 'bold',
    color: '#003c71',
    fontSize: 20,
  },
  titleHeader:{
    fontWeight: 'bold',
    fontSize: 18,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 16,
  }
});
