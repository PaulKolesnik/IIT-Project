
// import React, { FC, useEffect, useState } from "react";
// import { View, StyleSheet, Text, Pressable } from "react-native";
// import ApiService from "../../services/api-service";
// import {  Post } from "../models";

// export const SinglePostComponent: FC<{
//       post;
// }> = ({ post }) => {
//       const [message, SetMessage] = useState < String > ("");
//       const [showInput, setShowInput] = useState < Boolean > (false);
//       const [newText, setNewText] = useState("");
//       const [updateText, setUpdateText] = useState < String > ("Update");

//       const onDeletePost = async () => {
//             if (post instanceof MyPost) {
//                   try {
//                         const response = await ApiService.DeletePost(post._id);
//                         if (!!response) {
//                               SetMessage("Your post has been deleted");
//                         }
//                   } catch (err: any) {
//                         console.log(err);
//                   }
//             }
//       };

//       const onUpdatePost = () => {
//             if (post instanceof MyPost) {
//                   setShowInput(!showInput);
//                   if (!!showInput) {
//                         setUpdateText("Update");
//                   }
//                   else {
//                         setUpdateText("Cancel");
//                   }
//             }
//       };

//       const updatePost = async () => {
//             try {
//                   if (post instanceof MyPost) {
//                         const response = await ApiService.UpdatePost(post._id, newText);
//                         if (!!response) {
//                               SetMessage("Your post has been updated");
//                         }
//                   }
//             } catch (err: any) {
//                   console.log(err);
//             }
//       };
//       useEffect(() => {
//             console.log(post);
//             console.log(post instanceof Post);
//       }, []);

//       return (
//             <View>
//                   <View style={styles.postContainer}>
//                         <Text style={styles.userName}>{post.userName}</Text>
//                         <Text numberOfLines={4} ellipsizeMode="tail" style={styles.text}>
//                               {post.text}
//                         </Text>
//                         <Text style={styles.date}>{post.date}</Text>
//                         {post instanceof MyPost && (
//                               <Pressable style={styles.deleteButton} onPress={onDeletePost}>
//                                     <Text style={styles.deleteText}>{deletText}</Text>
//                               </Pressable>
//                         )}
//                         {post instanceof MyPost && (
//                               <Pressable style={styles.updateButton} onPress={onUpdatePost}>
//                                     <Text style={styles.updateText}>{updateText}</Text>
//                               </Pressable>
//                         )}
//                   </View>
//                   {!!showInput && (
//                         <InputComponent
//                               value={newText}
//                               placeholder="Enter the new text here"
//                               setValue={setNewText}
//                         />
//                   )}
//                   {!!showInput && <ButtonComponent text="Update Post" backColor="#0074b6" onPress={updatePost} />}
//                   <Text style={styles.successMessage}>{message}</Text>
//             </View>
//       );
// };