<template>
  <div class="main_container">
    <div class="dashboard_container">
      <div class="logo_container">
        <img src="/images/logo.png" alt="logo /" />
      </div>
      <div class="description_container">
        <p class="description_container_paragraph">
          Talk with user by passing his personal code or talk with strangers
        </p>
      </div>
      <div class="personal_code_container">
        <div class="personal_code_title_container">
          <p class="personal_code_title_paragraph">Your personal code</p>
        </div>
        <div class="personal_code_value_container">
          <p class="personal_code_value_paragraph">DDD</p>
          <button class="personal_code_copy_button" type="button">
            <img src="/images/copyButton.png" alt="copy-btn" />
          </button>
        </div>
      </div>
      <div class="personal_code_connecting_container">
        <p class="personal_code_connecting_paragraph mb-medium">Personal Code</p>
        <div class="personal_code_connecting_input_container">
          <input type="text" class="personal_code_input" />
        </div>
        <div class="personal_code_connecting_buttons_container">
          <button class="connecting_button">
            <img class="connecting_buttons_image" src="/images/chatButton.png" alt="Chat Button" />
          </button>
          <button class="connecting_button">
            <img class="connecting_buttons_image" src="/images/videoButton.png" alt="Video Button" />
          </button>
        </div>
      </div>
      <div class="stranger_connecting_container">
        <p class="stranger_title_container mb-medium">Stranger</p>
        <div class="stranger_buttons_container">
          <button class="connecting_button">
            <img class="connecting_buttons_image" src="/images/chatButton.png" alt="Chat Button" />
          </button>
          <button class="connecting_button">
            <img class="connecting_buttons_image" src="/images/videoButton.png" alt="Video Button" />
          </button>
        </div>
      </div>
      <div class="checkbox_container">
        <div class="checkbox_connection">
          <img class="display_none" src="/images/check.png" alt="Checkbox" />
        </div>
        <p class="checkbox_container_paragraph">Allow connection from strangers</p>
      </div>
      <div class="dashboard_blur display_none"></div>
    </div>
    <div class="call_container">
      <div class="videos_container">
        <div class="videos_placeholder">
          <img src="/images/logo.png" alt="" />
          <video class="remote_video display_none" src="" autoplay></video>
          <div class="local_video_container">
            <video class="local_video" muted autoplay></video>
          </div>
          <div class="call_buttons_container display_none">
            <button class="call_button_small">
              <img src="/images/mic.png" alt="Microphone button" />
            </button>
            <button class="call_button_small">
              <img src="/images/camera.png" alt="Camera button" />
            </button>
            <button class="call_button_large">
              <img src="/images/hangUp.png" alt="HangUp button" />
            </button>
            <button class="call_button_small">
              <img src="/images/switchCameraScreenSharing.png" alt="Switch Camera sharing button" />
            </button>
            <button class="call_button_small">
              <img src="/images/recordingStart.png" alt="Start Recording button" />
            </button>
          </div>
          <div class="finish_chat_button_container">
            <button class="call_button_large">
              <img src="/images/hangUp.png" alt="HangUp button" />
            </button>
          </div>
          <div class="video_recording_buttons_container">
            <button>
              <img src="/images/pause.png" alt="Pause button" />
            </button>
            <button>
              <img src="/images/resume.png" alt="Resume button" />
            </button>
            <button>Stop Recording</button>
          </div>
        </div>
      </div>
    </div>
    <div class="messenger_container">
      <div class="messages_container"></div>
      <div class="new_message_container display_none">
        <input type="text" class="new_message_input" placeholder="Type your text..." />
        <button class="send_message_button">
          <img src="/images/sendMessageButton.png" class="send_message_button_image" alt="Send Message Button" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import { defineComponent } from 'vue';
import socket from './services/socketio.service';

export default defineComponent({
  setup() {
    onMounted(() => {
      socket.setupConnection();
    });
  },
});
</script>

<style scoped></style>
