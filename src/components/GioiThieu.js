import React, {Component} from 'react';
import {Text,SafeAreaView,ScrollView,StyleSheet,View} from 'react-native';
import {Icon,Header} from 'react-native-elements';
export default class GioiThieu extends Component {
  render () {
    return (
       <View style={{marginBottom:20, paddingBottom:10}}>
        <Header containerStyle={{ height: 80, top: -30 }} placement="center" leftComponent={{ icon: 'menu', color: '#fff',text: 'Giới thiệu', style: { color: '#fff', fontWeight: 'bold' } }} centerComponent={{ }} rightComponent={{ icon: 'menu', color: '#fff' }} />
        <ScrollView>
          <View style={{marginTop:0}}>
            <Text style={styles.topHeader}> Giới thiệu về chúng tôi </Text>
            <Text>
              Chúng tôi với đội ngũ nhân viên của thế hệ 8X, 9X trẻ nhiêt huyết,
              năng động, sáng tạo và ham học hỏi có kinh nghiệm trong lĩnh vực
              công nghệ thông tin. Thiết kế web, viết phần mềm chúng tôi luôn
              cập nhật những công nghệ mới vào sản phẩm với mục đích đem lại
              hiệu quả tốt nhất cho khách hàng.Trải qua nhiều năm hoạt động công
              ty Cổ phần Phát triển Số Thời Đại đã có những bước phát triển
              không ngừng nghỉ trong việc thiết kể, hỗ trợ và phát triển website
              cho doanh nghiệp, cùng với các hoạt động dịch vụ .Công ty cổ phần
              phát triển số Thời Đại được thành lập MSDN: 2500559304 do sở kế
              hoạch đầu tư tỉnh Vĩnh phúc cấp.Trụ sở công ty được đặt tại: số
              nhà 149 – đường Trưng Trắc - Phường Trưng Trắc – Thị xã Phúc Yên –
              Tỉnh Vĩnh Phúc
        </Text>
          </View>
          <View>
            <Text style={styles.textHeader}>Lĩnh vực hoạt động</Text>
            <Text>Cung cấp các dịch vụ về du lịch trong và ngoài nước</Text>
          </View>
          <View>
            <Text style={styles.textHeader}>Đội ngũ nhân viên</Text>
            <Text>
              Chúng tôi Phát triển Số Thời Đại với đội ngũ nhân viên của thế hệ
              8X, 9X trẻ nhiêt huyết, năng động, sáng tạo và ham học hỏi có kinh
              nghiệm trong lĩnh vực công nghệ thông tin. Chúng tôi, một doanh
              nghiệp trẻ đã có những bước cố gắng phát triển không ngừng nghỉ để
              cho ra đời các sản phẩm, dịch vụ theo yêu cầu tốt nhất phù hợp với
              tất cả yêu cầu của khách hàng. Để lại ấn tượng sâu sắc trong lòng
              người sử dụng.
        </Text>
          </View>
          <View>
            <Text style={styles.textHeader}>Phương châm hoạt động</Text>
            <Text>
              Xác định con người là cốt lõi. Công ty chú trọng đầu tư nâng cao
              trình độ cho đội ngũ cán bộ nhân viên, đề cao đạo đức nghề nghiệp,
              nhằm đạt được tối đa sự hài lòng và tin tưởng của khách hàng.
        </Text>
            <Text>
              Được hoạt động dựa trên nền tảng “ khách hàng là trên hết ” cùng
              triết lý “ luôn làm tốt hơn gì bạn đã nghĩ ” và sẽ tiếp tục áp
              dụng triết lý kinh doanh này vào mọi hoạt động của công ty nhằm
              cam kết trở thành người bạn đồng hành tin cậy.
        </Text>
            <Text>
              Được hoạt động dựa trên nền tảng “ khách hàng là trên hết ” cùng
              triết lý “ luôn làm tốt hơn gì bạn đã nghĩ ” và sẽ tiếp tục áp
              dụng triết lý kinh doanh này vào mọi hoạt động của công ty nhằm
              cam kết trở thành người bạn đồng hành tin cậy.
        </Text>
          </View>
          <View>
            <Text style={styles.textHeader}>Định hướng phát triển</Text>
            <Text>
              Chúng tôi đã và đang áp dụng những công nghệ mới nhất, tiên tiến
              nhất để nâng cao chất lượng dịch vụ. Đặc biệt là trong thiết kế
              website, thiết kế, tích hợp những tính năng thông minh tối ưu hóa
              toàn bộ website cả về mặt mỹ thuật và kỹ thuật. Qua đó nâng cao
              khả năng cạnh tranh cho khách hàng trong lĩnh vực quảng bá tên
              tuổi trên internet.
        </Text>
          </View>
          <View>
            <Text style={styles.textHeader}>Cam kết</Text>
            <Text>
              Chúng tôi cam kết là đồng nghiệp, là nhân sự, là nhà tâm lý của
              khách hàng.
        </Text>
          </View>
          <View>
            <Text style={styles.textHeader}>Lới ngỏ</Text>
            <Text>
              Với mong muốn được phục vụ khách hàng ngày càng chu đáo hơn ,
              chúng tôi luôn sẵn sàng tiếp nhận và biết ơn mọi đóng góp của
              khách hàng. Trân trọng cảm ơn quý khách hàng đã quan tâm và ủng hộ
              sản phẩm, dịch vụ, chúng tôi mong muốn luôn được phục vụ và mang
              lại lợi ich cao nhất cho khách hàng.
        </Text>
          </View>
        </ScrollView>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  topHeader:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold'
  },
  textHeader:{
    fontSize:14,
    fontWeight:'bold',
  }
})