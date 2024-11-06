import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import ClientSignUp from "../../components/clientSignUp";

const ClientSignUP = () => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    if (!isModalVisible && !isAccepted) {
      router.back(); // Go back if the modal is dismissed without acceptance
    }
  }, [isModalVisible, isAccepted]);

  const handleAccept = () => {
    setIsAccepted(true);
    setIsModalVisible(false); // Close modal and proceed
  };

  const handleDecline = () => {
    setIsModalVisible(false); // Close modal to trigger router.back()
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-75">
          <View className="bg-white p-6 rounded-lg w-11/12 max-w-md">
            <ScrollView className="mb-4">
              <Text className="font-bold text-lg mb-2">
                Terms and Conditions
              </Text>
              <Text className="font-bold text-lg mb-2">Client</Text>
              <Text className="text-gray-700">
                1. Acknowledgment of Services Provided The Client acknowledges
                that OHS is a platform that connects clients with independent
                third-party contractors ("Contractors") for convenience. OHS
                does not provide any services directly and is not involved in
                the actual performance of services rendered by the Contractors.
                {"\n"}
                {"\n"}
                2. Release and Waiver The Client hereby fully and forever
                releases, waives, discharges, and covenants not to sue OHS, its
                affiliates, employees, agents, officers, and directors from any
                and all claims, demands, actions, causes of action, liabilities,
                damages, costs, expenses, or obligations of any kind or nature
                whatsoever, whether known or unknown, including but not limited
                to claims arising from the performance or non-performance of
                services by any Contractor engaged by the Client through the OHS
                platform. {"\n"}
                {"\n"}
                3. Disclaimer of Warranties and Guarantees OHS makes no
                representations or warranties, express or implied, regarding the
                qualifications, quality, or suitability of any Contractor. The
                Client agrees that any concerns or disputes arising out of the
                services provided by a Contractor must be addressed directly
                with the Contractor and not with OHS. {"\n"}
                {"\n"}
                4. Indemnification The Client agrees to indemnify, defend, and
                hold harmless OHS from and against any and all claims, damages,
                liabilities, costs, and expenses (including attorneys' fees)
                arising from or related to (i) the Client’s use of the OHS
                platform, (ii) the performance or non-performance of services by
                any Contractor, and (iii) any actions, omissions, or conduct of
                the Contractors. {"\n"}
                {"\n"}
                5. Limitation of Liability Under no circumstances shall OHS be
                liable for any direct, indirect, incidental, consequential,
                special, or punitive damages, or any other damages whatsoever,
                arising out of or related to the services provided by any
                Contractor, whether in contract, tort, or otherwise, even if
                advised of the possibility of such damages. {"\n"}
                {"\n"}
                6. Severability If any provision of this Agreement is found to
                be invalid or unenforceable, the remaining provisions shall
                continue to be valid and enforceable to the fullest extent
                permitted by law. {"\n"}
                {"\n"}
                7. Governing Law This Agreement shall be governed by and
                construed in accordance with the laws of [Insert Jurisdiction],
                without regard to its conflict of law principles. {"\n"}
                {"\n"}
                8. Entire Agreement This Agreement constitutes the entire
                understanding between the parties with respect to the subject
                matter hereof and supersedes all prior and contemporaneous
                agreements, understandings, and representations, whether written
                or oral, related to such subject matter. IN WITNESS WHEREOF, the
                Client has read and understood this Agreement and voluntarily
                signs it, intending to be legally bound.
                {"\n"}
                {"\n"}
                <Text className="font-bold text-lg mb-2">
                  Accept Terms and Conditions?
                </Text>
                <Text className="font-bold text-lg mb-2">
                  Accept Terms and Conditions?
                </Text>
              </Text>
            </ScrollView>
            <View className="flex-row justify-around mt-4">
              <TouchableOpacity
                onPress={handleDecline}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                <Text className="text-gray-700 font-semibold">Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleAccept}
                className="px-4 py-2 bg-blue-500 rounded"
              >
                <Text className="text-white font-semibold">Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {!isModalVisible && isAccepted && (
        <ScrollView>
          <ClientSignUp />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ClientSignUP;
